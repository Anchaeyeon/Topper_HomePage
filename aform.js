document.addEventListener('DOMContentLoaded', function() {
  const dormitoryInput = document.getElementById('room-num');
  const dormiRadioButtons = document.querySelectorAll('input[name="dormi"]');

  dormiRadioButtons.forEach(function(radio) {
      radio.addEventListener('change', function() {
          if (this.value === 'dormitory') {
              dormitoryInput.style.display = 'block'; // 기숙사 선택 시 호실 입력란 보이기
          } else {
              dormitoryInput.style.display = 'none';  // 통학 선택 시 호실 입력란 숨기기
          }
      });
  });
});

function showModal(event) {
    event.preventDefault(); // 기본 제출 방지
    $('#submissionModal').modal('show'); // 모달 표시
  }