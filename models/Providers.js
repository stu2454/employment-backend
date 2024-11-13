const mongoose = require('mongoose');

const ProviderSchema = new mongoose.Schema({
  providerRegNumber: {
    type: String,
    required: true
  },
  ABN: {
    type: String,
    required: true
  },
  contactPerson: {
    type: String,
    required: true
  },
  contactEmail: {
    type: String,
    required: true
  },
  contactPhone: {
    type: String,
    required: true
  }
  // Add other provider-specific fields here if needed
}, {collection: 'Providers' });

module.exports = mongoose.model('Providers', ProviderSchema);
