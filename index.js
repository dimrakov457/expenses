const { Alice, Reply } = require('yandex-dialogs-sdk')
const alice = new Alice();

alice.command(['Помощь', 'Что ты умеешь'], async ctx =>
  // Reply.text('Make const not var'),
  Reply.text('Вот что я могу', {
    buttons: [
      'Добавить новую категорию',
      'Скажи сколько я потратил',
      'Добавь расход'
    ],
  }),
);

alice.command(['Добавить новую категорию', 'Скажи сколько я потратил', 'Добавь расход'], async ctx =>
  Reply.text('Сделано')
);

// alice.command(, async ctx =>
//   // Reply.text('Make const not var'),
//   Reply.text('only vodka here', {
//     buttons: [
//       'Добавить новую категорию',
//       'Скажи сколько я потратил',
//       'Добавь расход'
//     ],
//   }),
// );

alice.any(async ctx => Reply.text('Я не понимаю.'));
const server = alice.listen(3000, '/');