## 'prototype-02'

<br>

### • 배포 주소: [https://prototype-cgv.netlify.app/](https://prototype-cgv.netlify.app/)

<br>

#### - 작업 기간: 2021.06

#### - 리팩토링: 2024.01

<br>

### 기술 스택

Development

<p>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
</p>

Config

<p>
<img src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white"/></a>
</p>

Environment

<p>
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat&logo=Visual Studio Code&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/></a>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a>
</p>
<br>

### 전체 페이지

<img src="https://github.com/azure0929/prototype-02/assets/128226527/9a75d8e8-3c34-43f8-9d38-5214d8227edb" />

<br><br>

### 💻 주요 기능

---

- page fadein&out

```javascript
$(".open-nav").click(function () {
  $(this).addClass("active");
  $(".close-nav").addClass("active");
  $(".front").fadeOut();
  $(".back").fadeIn();
});
$(".close-nav").click(function () {
  $(this).removeClass("active");
  $(".open-nav").removeClass("active");
  $(".back").fadeOut();
  $(".front").fadeIn();
});
```
