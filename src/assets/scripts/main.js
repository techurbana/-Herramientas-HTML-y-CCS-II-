/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */


import '@fortawesome/fontawesome-free/css/all.css'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

+( function() {
  console.log('Hello, Festival!');
} )();

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})