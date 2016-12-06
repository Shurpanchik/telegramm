var bb = require('bot-brother');
var route 	 = require('./route.json');
var bot = bb({
  key: '287983437:AAF8301FdPvaVXM-FF2_-Othqe4KH68HQFo',
  sessionManager: bb.sessionManager.memory(),
  polling: { interval: 0, timeout: 1 }
});
var answerMap = new Map();

// Let's create command '/start'.
bot.command('start')
.invoke(function (ctx) {
	answerMap.clear();
  return  ctx.go('ready'); 
})

bot.command('inprogress')
		.invoke(function (ctx) {
		// задаем вопрос пользователю
		var dataResultPoll =''; 
		if(answerMap.size==0){
		dataResultPoll='Вы ответили на 0 вопросов';
		}
		else{
			for (var val of answerMap.values()) {
				dataResultPoll = dataResultPoll+ '\n\n\n\n' + 'На вопрос: '+ val.text + '\n\n'+ ' Вы ответили: ' + val.answerUser  ;	
			}
		}
		answerMap.clear();
		return ctx.sendMessage(dataResultPoll);
		})
		
	function setQuestion(url, textQuestion, choiceAnswerButton,choiceAnswerResult, choiceRoute){
	bot.command(url)
		.invoke(function (ctx) {
		// задаем вопрос пользователю
		return ctx.sendMessage(textQuestion);
		})
		.answer(function (ctx) {
			// Обработчик ответа пользователя на наш вопрос.
		answerMap.set(url,{
					text : textQuestion,
					choiceAnswer : choiceAnswerResult,
					answerUser : choiceAnswerResult[parseInt(ctx.answer)]
					});
				// переход к следующему вопросу
			return ctx.go(choiceRoute[parseInt(ctx.answer)]);
		})
		.keyboard([
			choiceAnswerButton
		]);
		}


	// добавляет диалог с вопросом
function setDialog(q){
  setQuestion(  
			q.url,
			q.text,
			q.choiceAnswerButton,
			q.choiceAnswerResult, 
			q.choiceRouting
			)		
}



setDialog(route.ready);
setDialog(route.AreYouInAnyPain);
setDialog(route.AreYouInAnyPainWo);
setDialog(route.AreYouInAnyPainWobottomStomachhow);
setDialog(route.AreYouInAnyPainWobottomStomachhowoftenurine);
setDialog(route.AreYouInAnyPainWobottomStomachhowoftenurinedifficulturine);
setDialog(route.AreYouInAnyPainWobottomStomachhowgo);
setDialog(route.AreYouInAnyPainWobottomStomachhowoftenurinedifficulturineall);
setDialog(route.AreYouInAnyPainWobottomStomachhowbloodurine);
setDialog(route.AreYouInAnyPainWoanotheritch);
setDialog(route.AreYouInAnyPainWoanotherburn);
setDialog(route.AreYouInAnyPainWoanotherdiscomfort);
setDialog(route.AreYouInAnyPainWoanotherpenispain);
setDialog(route.AreYouInAnyPainWoanotherpenispaininexcreta);
setDialog(route.AreYouInAnyPainWoanotherpenispainoutopenhead);
setDialog(route.AreYouInAnyPainWoanotherpenispainallerection);
setDialog(route.AreYouInAnyPainWoanotherpenispaininexcretacolor);
setDialog(route.AreYouInAnyPainWoanotherpenispainoutopenheadall);
setDialog(route.AreYouInAnyPainWoanotherpenispainoutopenheadheadred);
setDialog(route.AreYouInAnyPainWoanotherpenispainoutopenheadheadrush);
setDialog(route.AreYouInAnyPainWoanotherpenispainoutopenheadheadpeeling);
setDialog(route.AreYouInAnyPainWoanotherpenispainoutopenheadheadwarts);
setDialog(route.AreYouInAnyPainWoanotherpenispainoutopenheadheadsmell);
setDialog(route.AreYouInAnyPainWoanotherpenispainoutopenheadheaddeform);
setDialog(route.AreYouInAnyPainWoanotherpenispainallerectiondeform);
setDialog(route.DoYouHaveAviolationOfUrination);
setDialog(route.DoYouHaveAviolationOfUrinationanyoft);
setDialog(route.DoYouHaveAviolationOfUrinationanypain);
setDialog(route.DoYouHaveAviolationOfUrinationanysluggishstream);
setDialog(route.DoYouHaveAviolationOfUrinationanydifficulty);
setDialog(route.DoYouHaveAviolationOfUrinationanynewsnine);
setDialog(route.YouHaveChangedTheColorOfTheUrine);