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

	def update
		render json: Type.find(params[:id]).tap { |t| t.update_attributes(type) }
	end

	def destroy
		Type.find(params[:id]).destroy
		head 204
	end


	private

	def type
		params[:type].permit(:metal_name, :type_name, :quantity)
	end
end
