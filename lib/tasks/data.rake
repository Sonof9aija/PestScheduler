namespace :data do
  desc "Import technicians, locations, and work orders from CSV files"
  task all: :environment do
    require 'csv'
    def remove_bom(string)
      string.sub("\uFEFF", '')
    end

    CSV.foreach(Rails.root.join('db/csv/technicians.csv'), headers: true) do |row|
      Technician.create!(row.to_hash.transform_keys { |key| remove_bom(key) })
    end

    CSV.foreach(Rails.root.join('db/csv/locations.csv'), headers: true) do |row|
      Location.create!(row.to_hash.transform_keys { |key| remove_bom(key) })
    end

    CSV.foreach(Rails.root.join('db/csv/work_orders.csv'), headers: true) do |row|
      WorkOrder.create!(
        technician_id: row['technician_id'],
        location_id: row['location_id'],
        time: DateTime.strptime(row['time'], '%m/%d/%y %H:%M'),
        duration: row['duration'],
        price: row['price']
      )
    end
  end
end