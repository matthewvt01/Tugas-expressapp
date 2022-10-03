const index = (req, res, next) => {
    res.render('index', { title: 'Express',nama: 'Koyori'});  //controller
  };

  const demo = (req, res, next) => {
    res.render('index', { title: 'Express',nama: 'Matthew Vincentius'});
  };

const show = (req, res, next) => {
    res.render('index', { title: 'Express',nama: 'Matthew Vincentius'});
  };

const edit = (req, res, next) => {
    res.render('index', { title: 'Express',nama: 'Matthew Vincentius'});
  };

const destroy = (req, res, next) => {
    res.render('index', { title: 'Express',nama: 'Matthew Vincentius'});
  };

module.exports = {index, show, edit, destroy, demo}