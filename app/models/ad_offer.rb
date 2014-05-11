class AdOffer < ActiveRecord::Base
  has_many :ad_boughts, :dependent => :destroy
  has_many :reviews, :dependent => :destroy
  has_many :discussions, :dependent => :destroy
  belongs_to :user
  belongs_to :ad_type

  # ===== VALIDACIJE =====
  validates :title, length: { in: 4..50 }
  validates :subtitle, length: { maximum: 200 }
  validates :description, length: { maximum: 10000 }
  validates :unit, length: { maximum: 15 }

  validates :price, numericality: true
  validates :views_count, numericality: { only_integer: true }
  validates :max_duration, numericality: { only_integer: true }

  validates :title, :price, :unit, :date_start, :date_end, :visibility, :max_duration, presence: true

  # ===== VALIDACIJE =====

  def self.search(keyword, type, price)
    query = ""
    if keyword
      query = "(title LIKE '%#{keyword}%' OR subtitle LIKE '%#{keyword}%')"
    end

    if type
      if query.length == 0
        query += "ad_type_id = #{type}"
      else
        query += " AND ad_type_id = #{type}"
      end
    end

    if price
      if query.length == 0
        query += "price <= #{price}"
      else
        query += " AND price <= #{price}"
      end
    end
    if query.length > 0
      ads = AdOffer.where query
    end
    ads
  end

end
