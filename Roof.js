class Roof
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.body=Bodies.rectangle(x, y, width, height , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var rpos=this.body.position;		

			push();
			translate(rpos.x,rpos.y);
			rectMode(CENTER);
			fill(192, 192, 192);
			rect(0,0,this.width, this.height);
			pop();
			
	}

}