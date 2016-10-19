module.exports = function (client) {
  
  console.log('PAGE OBJECT', this, 'args:', arguments.length)
  this.someCommand = function(){
    //do something
  }

  this.url = function(){
    return this.api.launchUrl
  }

  this.elements={
    button: {
      selector: 'a.some-button'
    }
  }
}