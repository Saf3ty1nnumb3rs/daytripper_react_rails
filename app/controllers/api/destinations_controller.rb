class Api::DestinationsController < ApplicationController
before_action :def_destination, only: [:show, :update, :destroy]

    def index
        @destinations = Destination.all
        render json: {
            destinations: @destinations.order(id: :desc)
        }
    end


    def show
        @posts = @destination.posts.order(id: :desc)
        @images = @destination.images.order(id: :desc)
        render json: {
        destination: @destination,
        images: @images,
        posts: @posts
        }
    end


    def create
        @destination = Destination.create!(destination_params)
        render json: {
            destination: @destination
        }
    end


    def update
        @destination.update!(destination_params)
        render json: {
            destination: @destination
        }
    end


    def destroy
        @destination.destroy
    end

    def search
        @city = params[:city]
        @state = params[:state]
        @street_address = params[:streetAddress]
        @zip = params[:zip].to_s

        @location = @street_address + ' ' + @city + ' ,' + @state + ' ,' + @zip
        
        puts @location

        @destinations = Destination.getDestinations(@location)


        render json: {
            destinations: @destinations,
        }
    end

    def locate
        @lat = params[:lat]
        @long = params[:long]



        @coord = @lat + ',' + @long

        @destinations = Destination.locateDestinations(@coord)

        render json: {
            coffee_shops: @coffee_shops
        }
    end


    private

    def def_destination
        @destination = Destination.find(params[:id])
    end

    def destination_params
        params.require(:destination).permit(:title, :image, :description, :id)
    end




end
