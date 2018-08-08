function foo(baz,bam){
    console.log(this.bar + " " + baz + " "+ bam);
}

var obj = { bar : "bar"};

foo = foo.bind(obj,"baz");

foo("bam");
