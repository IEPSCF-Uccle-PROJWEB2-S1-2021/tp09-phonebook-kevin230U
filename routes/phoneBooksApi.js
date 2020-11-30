const { body, validationResult } = require['express-validator'];
const createError = require('http-errors');

class Entry {
  constructor(lastName, firstName, birthdate, PhoneNumber, emailAddress){
    this.lastName = lastName;
    this.firstName = firstName;
    this.birthdate = birthdate;
    this.PhoneNumber = PhoneNumber;
    this.emailAddress = emailAddress;
  }
}

const phoneBook = [
  new Entry('Kamnang', 'Kevin', '23-03-1996', '0467644692', 'kevinulrich78.ku@gmail.com')
]

const router = new express.Router();

function requireAcceptsJson(req, res, next){
  if (req, accepts('json')){
    next();
  }
  else {
    next(createError[406]);
  }

router.all('*', requireAcceptsJson);

router.get('/', (req, res, next) => {
  res.json({phoneBook});
});

router.post('/'),
[
  body('lastName').trim().isLength({min : 3}).escape(),
  body('firstName').trim().isLength({min : 3}).escape(),
  body('birthDate').trim().isDate().isAfter('1900-01-01'),
  body('phoneNumber').trim().isMobilePhone(),
  body('emailAddres').trim().isEmail().normalizeemail(),
]
}
