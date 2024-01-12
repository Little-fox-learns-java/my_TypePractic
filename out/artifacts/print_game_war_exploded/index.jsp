<%--
  Created by IntelliJ IDEA.
  User: lenovo
  Date: 2024/1/12
  Time: 10:13
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>打字游戏</title>
    <link rel="stylesheet" href="css/game.css">

  </head>
  <body>
<%--  屏幕大小--%>
  <div class="screen">
  </div>

<%--    底部阴影--%>
  <div class="bottom_black"></div>

<%--记分牌--%>
  <div class="score">0</div>
<%--关卡数--%>
  <div class="level">第&nbsp;<span class="level_span">1</span>&nbsp;关
  </div>
<%-- 下一关/失败--%>
  <div class="success">闯关成功
    <div class="success_btn" onclick="init_game()">下一关</div>
  </div>
  <div class="failed">闯关失败
    <div class="failed_btn" onclick="init_game()">重新挑战</div>
  </div>
<%--  暂停开始按钮--%>
  <div class="start_game" onclick="init_game()">开始游戏</div>
  <div class="stop_game" onclick="stop_game()">暂停游戏</div>

  <script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
  <script type="text/javascript" src="js/game.js"></script>
  </body>
</html>
