function removeReadUser() {
  const users = this.document.querySelectorAll(".scout-users-index__card");
  users.forEach(function(user) {
    const memo = user.querySelector(".MemoContainer");
    const withComment = memo.querySelector(".memos");
    if (withComment) {
      user.remove();
    }
  });
}

window.onload = function() {
  const targetNode = document.querySelector("html");
  const observerOptions = {
    childList: true,
    attributes: true,
    subtree: true
  };

  const observer = new MutationObserver(() => {
    removeReadUser();
  });

  observer.observe(targetNode, observerOptions);
};
