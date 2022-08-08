$(document).ready(function () {
    'use strict';   //js에서 코드를 더 엄격히 처리하라는 뜻.

    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    //TODO
    /*var c = Shape.Circle(200, 200, 50);
    c.fillColor = 'darkcyan';*/

    /*var c;  /!* 느려서 그런진 몰라도 안됨..*!/
    for (var x = 0; x < 400; x =+ 200) {
        for (var y = 0; y < 400; y =+ 200) {
            c = Shape.Circle(x, y, 50);
            c.fillColor = 'blue';
        }
    }*/

    var tool = new Tool();

    tool.onMouseDown = function (event) {
        /*var c = Shape.Circle(event.point.x, event.point.y, 20);*/
        var c = Shape.Circle(event.point, 20);

        c.fillColor = 'green';
    }

    //add
    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';

    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';

    paper.view.draw();

    console.log('main.js loaded');
})
/*
    콘솔창에 입력되는 내용(console.log)
    코드를 직접 입력하거나 간단한 테스트 및 프로그램 임시 수정도 가능함.
 */
/*
    제이쿼리
    index.html에서 URL을 통해 제이쿼리를 불러옴.
    CDN(콘텐츠 전송 네트워크)에서 서비스하는 제이쿼리를 링크하여 사용하면 더욱 속도가 빨라진다.
    인터넷이 연결되어있지 않은 경우에도 사용하려면 제이쿼리를 직접 내려받아야 함.

    $(document).ready(function () { ... }) 가장 많이 볼 형태
 */
/*
    1. Paper.js의 전역스코프 설치
    2. Paper.js를 캔버스에 연결 그림을 그릴 준비를 함.
    3. //TODO 그림을 그리는 부분
    4. 실제로 그렇게 그림을 그려라
 */
/*  TODO
    1. 원 객체를 만들고 객체를 위한 3개의 매개변수를 받음 (200,200,50) (x좌표, y좌표, 원의 반지름)
            캔버스의 너비 : 400이기에 중간은 (200, 200) / 반지름 50픽셀은 캔버스의 너비와 높이의 1/8
    2. 채울 색깔(fillColor)를 정함.
            Paper.js에서 외곽선을 의미하는 Stroke와는 다른 친구.
 */
/*
    사용자 입력은 항상 '비동기적'. 비동기적 = 이벤트가 언제 일어날지 프로그래머가 전혀 알 수 없는 이벤트.
    (ex. 사용자의 마우스 클릭)
    사용자가 언제 클릭할지 말지에 대한 것. 이 모두 사용자의 선택.
 */
/*
    객체(tool)를 만들면 거기에 이벤트 핸들러를 연결할 수 있음. (onMouseClick: 사용자가 마우스를 클릭할 때마다 연결된 함수 호출)
 */
/*
    이벤트 핸들러가 하는 일, 2가지
    1. 마우스 클릭 시 코드를 실행
    2. 클릭한 위치를 매개변수의 event.point라는 property에 저장.
    자바스크립트는 넘겨받은 매개변수를 바탕으로 추론하는 능력이 있다.
 */