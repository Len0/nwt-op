class User < ActiveRecord::Base
  before_save :encrypt_password
  after_save :clear_password
  attr_accessor :password
  
  mount_uploader :avatar, AvatarUploader
  
  has_one :password_recovery_token
  has_one :subscription
  has_many :ad_offers
  has_many :ad_boughts
  has_many :subscriptions
  has_many :discussions
  has_many :reviews
  has_many :logs
  belongs_to :user_type


  # ===== VALIDACIJE =====
  validates :password, length: { in: 5..20 }, :on => :create
  validates :username, length: { in: 4..20 }
  validates :name, length: { maximum: 50 }
  validates :contact, length: { maximum: 100 }
  validates :email, length: { maximum: 70 }
  validates :description, length: { maximum: 10000 }

  validates :username, :name, presence: true

  validates :email, uniqueness: true
  validates :username, uniqueness: true
  
  validates :password, confirmation: true

  # ===== VALIDACIJE =====


  # 'password' is a virtual attribute



  def self.search(query)
    where("name LIKE ?", "%#{query}%")
  end

  def User.encrypt_password(password, salt)
    Digest::SHA2.hexdigest(password + "emir" + salt)
  end

  def User.authenticate(username, password)
    logger.debug "Pocela pretraga"
    if user = User.where(:username => username).first
      logger.debug "Username postoji #{user.username}"
      if user.hashed_password == encrypt_password(password, user.salt)
        if user.is_activated?
          logger.debug "Password dobar"
          user
        else
        logger.debug "Nalog nije aktiviran"
        return nil
        end

      end
    end
  end

  private

  def generate_salt
    self.salt = self.object_id.to_s + rand.to_s
  end
 def encrypt_password
    if password.present?
      generate_salt
      self.hashed_password = self.class.encrypt_password(password, self.salt)
    end
  end

  def clear_password
    self.password = nil
  end

end