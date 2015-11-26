package ;

class Main {
			

	
	public var location(get_location, set_location):String;
	private var _location:String;
	
	function get_location():String {
		return _location;
	}
	function set_location(value:String):String {
		return _location = value;
	}

	static public function main() {
		var app = new Main();
	}

}		