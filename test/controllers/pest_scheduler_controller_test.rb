require "test_helper"

class PestSchedulerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get pest_scheduler_index_url
    assert_response :success
  end
end
