class Api::UsersController < ApplicationController
    before_action :def_user, only: [:show, :update, :destroy]

    def index
        @users = User.all
        render json: {
            users: @users
        }
    
    end

    def show
        render json: {
            user:@user
        }
    end

    def create
        @user = User.create!(user_params)
        render json: {
            user: @user
        }
    end 

    def update
        @user.update!(user_params)
        render json: {
            user: @user
        }
    end

    def destroy
        @user.destroy
    end

    private

    def def_user
        @user = User.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:image, :username, :email, :location)
    end

end
