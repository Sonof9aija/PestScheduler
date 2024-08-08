class PestSchedulerController < ApplicationController
  def index
    @technicians = Technician.all
    @work_orders = WorkOrder.includes(:location, :technician).all
  end
end
