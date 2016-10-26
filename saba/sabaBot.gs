function myFunction() {
  // ���ݎ��Ԃ̎擾
  var now = Utilities.formatDate(new Date(), "JST", "HH:mm");
  
  // �X�P�W���[���̎擾
  var scheduleArray = getSchedule();
  
  // �X�P�W���[���̃`�F�b�N
  for (var i = 0; i < scheduleArray.length; i++) {
    var schedule =  scheduleArray[i];
    
    if (schedule["time"] !== now) {
      // ���Ԃ���v���Ȃ��ꍇ
      continue;
    }
    
    // ���e
    var payload = createPayloadBase(schedule["text"]);
    postSlack(payload);
  }
  
  // �����̂���
  var random = Math.floor(Math.random() * 100);
  if (random == 0) {
    var tweetArray = getTweet();
    var tweet = tweetArray[Math.floor(Math.random() * tweetArray.length)];
    var payload = createPayloadBase(tweet);
    postSlack(payload);
  }
}

function createPayloadBase(text) {
  var payload = {
    "username" : "���Ԃ��T�o���Ibot",
    "icon_emoji": "", // �A�C�R���摜��slack���̐ݒ���g�p
    "channel" : "#saba",
    "text" : text
  };

  return payload;
}

function postSlack(payload) {
  // POST��
  var url = "POST��URL��ݒ肵�Ă�������";

  // POST�I�v�V����
  var options = {
    "method" : "POST",
    "payload" : JSON.stringify(payload)
  };

  // POST
  var response = UrlFetchApp.fetch(url, options);
  var content = response.getContentText("UTF-8");
}

function getSchedule() {
  var scheduleArray = new Array();

  schedule = {
    "time" : "09:30",
    "text" : "����̎��Ԃł���I"
  };
  scheduleArray.push(schedule);
  
  schedule = {
    "time" : "10:00",
    "text" : "�W������ �J�n"
  };
  scheduleArray.push(schedule);
  
  schedule = {
    "time" : "11:30",
    "text" : "�W������ �I��"
  };
  scheduleArray.push(schedule);
  
  schedule = {
    "time" : "12:00",
    "text" : "���Ђ�₷�݁I�I�I"
  };
  scheduleArray.push(schedule);
  
  schedule = {
    "time" : "13:00",
    "text" : "�W������ �J�n"
  };
  scheduleArray.push(schedule);
  
  schedule = {
    "time" : "14:30",
    "text" : "�W������ �I��"
  };
  scheduleArray.push(schedule);
  
  schedule = {
    "time" : "15:00",
    "text" : "�W������ �J�n"
  };
  scheduleArray.push(schedule);
  
  schedule = {
    "time" : "16:30",
    "text" : "�W������ �I��"
  };
  scheduleArray.push(schedule);
  
  schedule = {
    "time" : "17:00",
    "text" : "�W������ �J�n"
  };
  scheduleArray.push(schedule);
  
  schedule = {
    "time" : "18:00",
    "text" : "�c�Ɛ\���Y�ꂸ�ɁB"
  };
  scheduleArray.push(schedule);
  
  schedule = {
    "time" : "18:30",
    "text" : "�W������ �I��"
  };
  scheduleArray.push(schedule);

  schedule = {
    "time" : "18:30",
    "text" : "�_( '��' )�O�_( '��')�^�莞�[�[�b�I�I"
  };
  scheduleArray.push(schedule);

  return scheduleArray;
}

function getTweet() {
  var tweetArray = new Array();

  tweetArray.push("�T�o�@�c");
  tweetArray.push("���S���Ă��������B�T�o�ł���B");
  tweetArray.push("���񂾃T�o�̖ڂ݂����ɂȂ��Ă��܂���B�����x�e���܂��񂩁H");
  tweetArray.push("���тɔY��ł���Ȃ�Ă��T�o�Ȃ�Ăǂ��ł��傤���B");
  tweetArray.push("�T�o�A�������ꂽ�c");
  tweetArray.push("�T�o�����ɃT�o�T�o���Ă���B");
  
  return tweetArray;
}
