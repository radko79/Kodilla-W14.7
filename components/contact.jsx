var contacts = [
  {
    id: 1,
    firstName: 'Jan',
    lastName: 'Nowak',
    email: 'jan.nowak@example.com',
  },
  {
    id: 2,
    firstName: 'Adam',
    lastName: 'Kowalski',
    email: 'adam.kowalski@example.com',
  },
  {
    id: 3,
    firstName: 'Zbigniew',
    lastName: 'Koziol',
    email: 'zbigniew.koziol@example.com',
  }
];

var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};

var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className={'contactItem'}>
        <img className={'contactImage'} src="http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico" />
        <p className={'contactLabel'}> Imię: {this.props.item.firstName} </p>
        <p className={'contactLabel'}> Nazwisko: {this.props.item.lastName} </p>
        <a href={'mailto:' + this.props.item.email} className={'contactEmail'} value={this.props.item.email}> sad as... </a>
      </div>
    )
  },
});

