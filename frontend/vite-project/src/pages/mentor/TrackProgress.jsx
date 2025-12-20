import "./mentor.css";

const TrackProgress = () => {
  const progressData = [
    { student: "Harika", course: "Java Fundamentals", progress: 80 },
    { student: "Rahul", course: "Spring Boot", progress: 45 },
    { student: "Anjali", course: "Java Fundamentals", progress: 100 },
  ];

  return (
    <div className="center-page">
      <h1 className="page-title">Student Progress</h1>

      <div className="progress-graph">
        {progressData.map((item, index) => (
          <div key={index} className="progress-row">
            <div className="progress-info">
              <strong>{item.student}</strong>
              <span>{item.course}</span>
            </div>

            <div className="graph-bar">
              <div
                className="graph-fill"
                style={{ width: '${item.progress}%' }}
              >
                {item.progress}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackProgress;