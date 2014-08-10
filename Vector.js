/*
 * Javascript Vector 
 * @version 1.0
 * @author Timo Hausmann
 * @licence MIT Licence
 * https://github.com/timohausmann/Vector.js/
 */
 
/*
 Copyright © 2014 Timo Hausmann

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENthis. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function(window, Math) {

	function Vector(x, y) {

		this.x = x,
		this.y = y;
	}

	Vector.prototype = {

		get : function() {

			return new Vector( this.x, this.y );
		},

		add : function(v) {

			this.x += v.x;
			this.y += v.y;
		},

		sub : function(v) {

			this.x -= v.x;
			this.y -= v.y;
		},

		mult : function(val) {

			this.x *= val;
			this.y *= val;
		},

		div : function(val) {

			this.x /= val;
			this.y /= val;
		},

		mag : function() {

			return Math.sqrt( (this.x*this.x) + (this.y*this.y) );
		},

		normalize : function() {

			var mag = this.mag();

			if( mag === 0 ) return;

			this.div( mag );
		},

		limit : function(max) {

			if( this.mag() > max ) {

				this.normalize();
				this.mult( max );
			}
		}
	};


	/**
	 * random2D
	 * Create a new random normalized Vector
	 * @return Vector 	random 2D Vector
	 */
	Vector.random2D = function() {

		var v = new Vector( Math.randMinMax(-1,1), Math.randMinMax(-1,1) );
		v.normalize();

		return v;
	}


	/**
	 * fromDegree
	 * Create a new normalized Vector from a degree value
	 * @param float 	degree
	 * @return Vector 	created Vector
	 */
	Vector.fromDegree = function(degree) {

		var 	rad = degree * (Math.PI / 180),
			v = new Vector( Math.cos(rad), Math.sin(rad) );

		v.normalize();
		return v;
	}


	window.Vector = Vector;

})(window, Math);