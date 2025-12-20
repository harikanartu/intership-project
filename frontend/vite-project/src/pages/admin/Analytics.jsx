import "./admin.css";

const Analytics = () => {
  return (
    <div>
      <h2>Platform Analytics</h2>

      <div className="analytics-grid">
        <div className="analytics-card">
          <h3>Students</h3>
          <p>90</p>
        </div>

        <div className="analytics-card">
          <h3>Mentors</h3>
          <p>25</p>
        </div>

        <div className="analytics-card">
          <h3>Completion Rate</h3>
          <p>72%</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;