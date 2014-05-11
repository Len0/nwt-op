class AdController < ApplicationController
  before_filter :is_logged
  before_action :is_oglasivac, only: [:create]
  def create
    respond_to do |format|
      format.json {
        newAd = AdOffer.new
        newAd.user_id = session[:user_id]
        newAd.ad_type_id = params[:ad_type_id] # POPRAVITI  da radi kada se user loginuje

        newAd.title = params[:title]
        newAd.subtitle = params[:subtitle]
        newAd.description = params[:description]
        newAd.price = params[:price]
        newAd.unit = params[:unit]
        newAd.date_start = DateTime.strptime(params[:date_start], "%d.%m.%Y %H:%M")
        newAd.date_end = DateTime.strptime(params[:date_end], "%d.%m.%Y %H:%M")
        newAd.visibility = params[:visibility]
        newAd.views_count = 0
        newAd.max_duration = params[:max_duration]
        newAd.save

        msg = { :errors => newAd.errors.messages}
        render :json => msg
      }
    end

  end

  def update
    if params[:title]
      ad = AdOffer.update(params[:id], :title => params[:title])
    end
    if params[:subtitle]
      ad = AdOffer.update(params[:id], :subtitle => params[:subtitle])
    end
    if params[:description]
      ad = AdOffer.update(params[:id], :description => params[:description])
    end
    if params[:price]
      ad = AdOffer.update(params[:id], :price => params[:price])
    end
    if params[:unit]
      ad = AdOffer.update(params[:id], :unit => params[:unit])
    end
    if params[:date_start]
      ad = AdOffer.update(params[:id], :date_start => DateTime.strptime(params[:date_start], "%d.%m.%Y %H:%M").to_s(:db))
    end
    if params[:date_end]
      ad = AdOffer.update(params[:id], :date_end => DateTime.strptime(params[:date_end], "%d.%m.%Y %H:%M").to_s(:db))
    end
    if params[:is_hidden]
      ad = AdOffer.update(params[:id], :is_hidden => params[:is_hidden])
    end
    if params[:max_duration]
      ad = AdOffer.update(params[:id], :max_duration => params[:max_duration])
    end
    if params[:ad_type_id]
      ad = AdOffer.update(params[:id], params[:ad_type_id])
    end

    respond_to do |format|
      format.json {
        msg = { :status => "ok", :message => "Success!", :html => ad }
        render :json => msg
      }
    end

  end

  def delete
    respond_to do |format|
      format.json {
        AdOffer.destroy(params[:id])
        msg = { :status => "ok", :message => "Success!", :html => "<b>Obrisano</b>" }
        render :json => msg
      }
    end

  end

  def buy
    buy = AdBought.new
    buy.ad_offer_id = params[:ad_offer_id]
    buy.date_start = DateTime.strptime(params[:date_start], "%d.%m.%Y %H:%M").to_s(:db)
    buy.duration = params[:duration]
    buy.save

    respond_to do |format|
      format.json {
        msg = { :status => "ok", :message => "Success!", :html => buy }
        render :json => msg
      }
    end
  end

  def create_type
    respond_to do |format|
      format.json {
        atype = AdType.new
        atype.ad_type = params[:ad_type]
        atype.save
        msg={:errors => atype.errors.messages}
        render :json => msg
      }
    end

  end

  def all_types
    respond_to do |format|
      format.json {
        types=AdType.all
        render :json => types
      }
    end

  end

end
