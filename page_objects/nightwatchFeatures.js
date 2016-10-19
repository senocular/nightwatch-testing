module.exports = {
  elements: {
    featuresHeading: {
      selector: '#index-container h2',
      index: 1 // 2nd <h2> in the #index-container element
    },
    features: '#index-container .features h3'
  },
  commands:[{
    getFeatureCount: function(callback) {
      this.api.elements(null, this.elements.features, function(result) {
        if (result.status === 0) {
          var countResult = {
            status: 0,
            value: result.value.length
          }
          callback.call(this, countResult);
        } else {
          callback.call(this, result);
        }
      }.bind(this));
      return this;
    }
  }]
};
