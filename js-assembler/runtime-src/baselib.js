// Basic library functions.  This will include a few simple functions,
// but be augmented with several namespaces for the other libraries in
// the base library.
if (! this['plt']) { this['plt'] = {}; }
(function (plt) {
    var baselib = {};
    plt['baselib'] = baselib;



    // Simple object inheritance.
    var heir = function(parentPrototype) {
	var f = function() {}
	f.prototype = parentPrototype;
	return new f();
    };



    // clone: object -> object
    // Copies an object.  The new object should respond like the old
    // object, including to things like instanceof.
    var clone = function(obj) {
        var C = function() {}
        C.prototype = obj;
        var c = new C();
        for (property in obj) {
	    if (obj.hasOwnProperty(property)) {
	        c[property] = obj[property];
	    }
        }
        return c;
    };


    // Consumes a class and creates a predicate that recognizes subclasses.
    var makeClassPredicate = function(aClass) {
	return function(x) { return x instanceof aClass; };
    };



    // Helper to deal with the argument-passing of primitives.  Call f
    // with arguments bound from MACHINE.env, assuming
    // MACHINE.argcount has been initialized with the number of
    // arguments on the stack.  vs provides optional values for the
    // arguments that go beyond those of the mandatoryArgCount.
    var withArguments = function(MACHINE,
                                 mandatoryArgCount,
                                 vs,
                                 f) {
        var args = [];
        for (var i = 0; i < MACHINE.argcount; i++) {
            if (i < mandatoryArgCount) {
                args.push(MACHINE.env[MACHINE.env.length - 1 - i]);
            } else {
                if (i < MACHINE.argcount) {
                    args.push(MACHINE.env[MACHINE.env.length - 1 - i]);
                } else {
                    args.push(vs[mandatoryArgCount - i]);
                }
            }
        }
        return f.apply(null, args);
    };



    baselib.heir = heir;
    baselib.clone = clone;
    baselib.makeClassPredicate = makeClassPredicate;
    baselib.withArguments = withArguments;


})(this['plt']);
