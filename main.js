$(function(){
  //定数定義
  const MSG_TEXT_MAX = '20文字以内で入力してください。';
  const MSG_EMPTY = '入力必須です。';
  const MSG_EMIL_TYPE = 'emailの形式ではありません。';
  const MSG_TEXTAREA_MAX = '100文字以内で入力してください。';
  
  // 考え方
  // ①どこで何のイベントを走らせたいか考える
  // ②イベントが走った時にどこの要素(DOM)に何をしたいか考える
  
  // POINT
  // なんでclosestを使用するのか / ('.form-group')を直接DOM取得できない(それをするとまずい)理由は？
  
  //======================================================
  //名前
  //======================================================
  //keyupイベントで調べてみてね！
  $(".valid-text").keyup(function(){
   //$(this) = $(".valid-text")のDOM / console.log($(this));　でチェック！ / closestメソッドとはで検索！
    var form_g = $(this).closest('.form-group');
    //val()メソッドとは？ lengthプロパティとは？
    if($(this).val().length > 20 ){
      //メソッドチェーン オブジェクト.メソッド().メソッド()の形
      form_g.removeClass('has-success').addClass('has-error');
      //findメソッド、textメソッドを検索！
      form_g.find('.help-block').text(MSG_TEXT_MAX);
    }else{
      form_g.removeClass('has-error').addClass('has-success');
      form_g.find('.help-block').text('');
    }
  });
   
  //======================================================
  //email
  //======================================================
  $(".valid-email").keyup(function(){
   
    var form_g = $(this).closest('.form-group');
   
    if( $(this).val().length === 0 ){
      form_g.removeClass('has-success').addClass('has-error');
      form_g.find('.help-block').text(MSG_EMPTY);
    }else if($(this).val().length > 50 || !$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/) ){
      form_g.removeClass('has-success').addClass('has-error');
      form_g.find('.help-block').text(MSG_EMIL_TYPE);
    }else{
      form_g.removeClass('has-error').addClass('has-success');
      form_g.find('.help-block').text('');
    }
  });
   
  //======================================================
  //内容
  //======================================================
  $(".valid-textarea").keyup(function(){
   
    var form_g = $(this).closest('.form-group');
   
    if($(this).val().length === 0){
      form_g.removeClass('has-success').addClass('has-error');
      form_g.find('.help-block').text(MSG_EMPTY);
    }else if( $(this).val().length > 100 ){
      form_g.removeClass('has-success').addClass('has-error');
      form_g.find('.help-block').text(MSG_TEXTAREA_MAX);
    }else{
      form_g.removeClass('has-error').addClass('has-success');
      form_g.find('.help-block').text('');
    }
  });
   
  });