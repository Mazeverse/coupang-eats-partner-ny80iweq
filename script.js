function copyCode() {
  const code = document.getElementById('refCode').innerText;
  navigator.clipboard.writeText(code).then(() => {
    alert('초대코드가 복사되었습니다.');
  });
}
