// ------------------------ Task - 1 -------------------------

const fetchData = (url, callback) => {
  setTimeout(() => {
    if (url === "https://api.github.com/users") {
      callback(null, { data: "fake data" });
    } else {
      callback(new Error("error"), null);
    }
  }, 1000);
};

fetchData("https://api.github.com/users", (error, response) => {
  if (error) {
    console.log(error);
  } else {
    console.log(response.data);
  }
});

// ----------------------- Task - 2 ----------------------

const fetchData2 = (url, callback) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      callback(null, data);
    })
    .catch((err) => {
      console.log(err);
      callback(err, null);
    });
};

const fetchData3 = (url, callback) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      callback(null, data);
    })
    .catch((err) => {
      console.log(err);
      callback(err, null);
    });
};

const fetchData4 = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      callback(null, data);
    })
    .catch((err) => {
      console.log(err);
      callback(err, null);
    });
};

fetchData2("https://api.github.com/users", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    fetchData3("http://api.example.com/posts", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        fetchData4("http://api.example.com/comments", (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Comments : ", data);
          }
        });
      }
    });
  }
});

// --------------------------------- Task - 3 ---------------------------

function fetchDataPromise(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("There is error in fetching");
        }
        return res.json();
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

// --------------------------------- Task - 4 -----------------------------

function fetchUserDataPromise(url) {
  fetchDataPromise(url)
    .then((userData) => {
      console.log(userData);
    })
    .then((userPosts) => {
      console.log(userPosts);
    })
    .then((comments) => {
      console.log(comments);
    })
    .catch((err) => console.error(err));
}

fetchUserDataPromise();

// ---------------------- Task - 5 -----------------------------

async function fetchUserDataAsync() {
  try {
    const userData = await fetchDataPromise("http://api.example.com/user");
    console.log("User Data:", userData);
    try {
      const userPosts = await fetchDataPromise(
        "http://api.example.com/posts" + userData.id
      );
      console.log("Posts Data:", userPosts);
      try {
        const comments = await fetchDataPromise(
          "http://api.example.com/comments" + userPosts[0].id
        );
        console.log("Comments Data:", comments);
      } catch (err) {
        console.error("Comment error: ", err);
      }
    } catch (err) {
      console.error("Posts Error: ", err);
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

fetchUserDataAsync();
