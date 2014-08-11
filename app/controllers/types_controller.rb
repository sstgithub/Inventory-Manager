class TypesController < ApplicationController
	def index
		render json: Type.all
	end

	def show
		render json: Type.find(params[:id])
	end

	def create
		sleep 0.5
		render json: Type.create(type)
	end

	private

	def type
		params[:type].permit(:metal_name, :type_name, :quantity)
	end
end
