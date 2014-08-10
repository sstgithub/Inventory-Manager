class TypesController < ApplicationController
	def index
		render json: Type.all
	end

	def show
		render json: Story.find(params[:id])
	end
end
