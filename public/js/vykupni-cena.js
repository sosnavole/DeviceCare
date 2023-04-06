function updateModels(brand) {
    var models = {
      'Apple': ['iPhone 12', 'iPhone 11', 'iPhone Xr', 'iPhone Xs', 'iPhone X', 'iPhone 8 Plus', 'iPhone 8', 'iPhone 7 Plus', 'iPhone 7', ],
      'Samsung': ['Galaxy S10', 'Galaxy S20', 'Galaxy S21'],
      'Xiaomi': ['Redmi 1', 'Redmi 2', 'Redmi 3'],
    };
  
    var modelSelect = document.getElementById('model');
    modelSelect.innerHTML = '';
  
    for (var i = 0; i < models[brand].length; i++) {
      var option = document.createElement('option');
      option.value = models[brand][i];
      option.innerHTML = models[brand][i];
      modelSelect.appendChild(option);
    }
  }
  
  function updateBackglass(model) {
    var brokenBackglassLabel = document.getElementById('brokenBackglassLabel');
    var brokenBackglass = document.getElementById('brokenBackglass');
  
    if (model === 'iPhone 11') {
      brokenBackglassLabel.style.display = 'block';
      brokenBackglass.style.display = 'block';
    } else {
      brokenBackglassLabel.style.display = 'none';
      brokenBackglass.style.display = 'none';
    }
  }
  