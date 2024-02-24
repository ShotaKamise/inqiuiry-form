class InquiriesController < ApplicationController

    def new
    end

    def index
      @inquiries = Inquiry.all
      respond_to do |format|
        format.html
        format.json { render json: @inquiries }
      end
    end

    def create
        @inquiry = Inquiry.new(inquiry_params)
        if @inquiry.save
          render json: @inquiry, status: :created
        else
          render json: @inquiry.errors, status: :unprocessable_entity
        end
      end
    
      private
        def inquiry_params
          params.require(:inquiry).permit(:name, :email, :category, :message)
        end

    def destroy
      inquiry = Inquiry.find(params[:id])
      inquiry.destroy
      head :no_content
    rescue ActiveRecord::RecordNotFound
      render json: { error: "Inquiry not found" }, status: :not_found
    end
end
