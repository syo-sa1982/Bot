# ���Ԃ��T�o���Ibot

�w�肵�����ԂɎI���Ԃ₭Slack��bot�ł��B

## Description

�X�N���v�g��̃X�P�W���[���ɏ]����Slack�ɓ��e���s���܂��B  
�����Google Apps Script�ł��B  
�܂��A���܁[�ɎI���ڂ₫�܂��B  
  
Google Apps Script�̃g���K�[�Ŏ��Ԏw�肪�ł��Ȃ����߁A1�����Ƃɓ������X�P�W���[�����`�F�b�N����悤�ȏ����ƂȂ��Ă���܂��B

## Usage

* �I�ɓ��e���������`�[����Slack���J���A�������j���[�́uApps & integrations�v���������܂��B
* �uIncoming WebHooks�v���������A�V�K�쐬��Webhook URL���擾���܂��B
* `Bot/sabaBot.gs`�̕ϐ�url��Webhook URL��ݒ肵�܂��B
```
function postSlack(payload) {
  // POST��
  var url = "POST��URL��ݒ肵�Ă�������";
```
* `Bot/sabaBot.gs`��bot���Ⓤ�e��`�����l����ݒ肵�܂��B
```
function postSlack(payload) {
function createPayloadBase(text) {
  var payload = {
    "username" : "���Ԃ��T�o���Ibot",
    "icon_emoji": "", // �A�C�R���摜��slack���̐ݒ���g�p
    "channel" : "#saba",
    "text" : text
  };
```
* Google�h���C�u���J���A�E�N���b�N���u���̑��v���u�A�v����ǉ��v�ŁuGoogle Apps Script�v��ǉ����܂��B
* Google�h���C�u�̔C�ӂ̃f�B���N�g�����J���A�E�N���b�N���u���̑��v���uGoogle Apps Script�v�ŕҏW��ʂ��J���܂��B
* `Bot/sabaBot.gs`�̓��e��S�ăR�s�[���A�ҏW��ʂɃy�[�X�g���܂��B
* �㕔���j���[�u���\�[�X�v���u���݂̃v���W�F�N�g�̃g���K�[�v���g���K�[���쐬���܂��B  
`myFunction`���C�x���g�u���Ԏ哱�^�v��1�����ƂɎ��s����悤�ݒ肵�܂��B
* �X�N���v�g��ۑ����܂��B
* ���e�����܂ő҂��܂��傤�I


## Install

```console
$ git clone https://github.com/szkayeah/Bot.git
```

## Author

[szkayeah](https://github.com/szkayeah)
