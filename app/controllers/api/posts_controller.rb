class Api::PostsController < ApplicationController
before_action :def_post, only: [:show, :update, :destroy]

    def index
        @posts = Destination.find(params[:destination_id]).posts.order(id: :desc)
        render json: @posts
    end

    def show
        @destination_title = Destination.find(params[:destination_id]).title
        render json: {
            post: @post,
            destination_name: @destination_name
        }
    end

    def create
        @destination = Destination.find(params[:destination_id])
        @post = @destination.posts.create!(post_params)
        render json: {
            post: @post
        }
    end

    def update
        @post.update!(post_params)
        render json: {
            post: @post
        }

    end

    def destroy
        @post.destroy
    end

private

    def def_post
        @post = Post.find(params[:id])
    end

    def post_params
        params.require(:post).permit(:subject, :image, :content, :destination_id)
    end







end
