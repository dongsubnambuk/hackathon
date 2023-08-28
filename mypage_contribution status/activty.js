document.addEventListener('DOMContentLoaded', function () {
    var activityList = document.querySelector('.activity_list');

    //백엔드 연결 코드
     fetchActivityData();

    // 활동 항목 데이터 예시 (이 부분은 실제 데이터를 동적으로 받아와야 합니다)
    var activities = [
        { title: "프로젝트 A 완료", date: "2023-08-10" },
        { title: "세미나 참석", date: "2023-08-15" },
        { title: "휴가", date: "2023-08-20" }
        // ... 더 많은 활동 데이터
    ];

    // 각 활동 항목을 밑줄 형식으로 추가
    activities.forEach(function (activity) {
        var activityItem = document.createElement('div');
        activityItem.classList.add('activity_item');
        activityItem.innerHTML = `<span class="activity_title">${activity.title}</span><span class="activity_date">${activity.date}</span>`;
        activityList.appendChild(activityItem);
    });
});

// 백엔드 연결 코드
function fetchActivityData() {
        fetch("/api/activity") //서버 경로 지정
      .then(response => response.json())
      .then(data => displayActivityData(data))
      .catch(error => console.error("Error fetching data:", error));
  }
  
  function displayActivityData(data) {
    const activityList = document.querySelector(".activity_list");
  
    data.forEach(activity => {
      const activityItem = document.createElement("div");
      activityItem.className = "activity_item";
      activityItem.textContent = activity.title;
  
      activityList.appendChild(activityItem);
    });
  }
