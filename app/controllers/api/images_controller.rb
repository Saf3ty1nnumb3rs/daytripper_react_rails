class Api::ImagesController < ApplicationController
before_action :def_image, only: [:show, :destroy]

    def index
        @images = Destination.find(params[:destination_id]).images.order(id: :desc)
        render json: @images
    end

    def show
        @destination_title = Destination.find(params[:destination_id]).title
        render json: {
            image: @image,
            destination_title: @destination_title
        }
    end

    def create
        @destination = Destination.find(params[:destination_id])
        @image = @destination.images.create(image_params)
        render json: {
            image: @image
        }
    end

    def destroy
        @image.destroy
    end

    private

    def def_image
        @image = Image.find(params[:id])
    end

    def image_params
        params.require(:image).permit( :image, :description, :destination_id)
    end



end
