// 2011-09-12 -> This file is an attempt to reduce the TriangleImage
// file down to a more minimal form for conceptual understanding

var ti = function(si,an,st,co) {
    this.width =  equation;
    this.height = equation;
    BaseImage.call(this, this.width, this.height)
    this.side = side;
    this.angle = angle;
    this.style = style;
    this.color = color;
}

ti.prototype = heir(BaseImage.prototype);

ti.prototype.render = function(ctx, x, y) {
    var width = this.getWidth();
    var height = this.getHeight();
    ctx.save();
    ctx.beginPath();
    // canvas drawing algorithm
    ctx.closePath();
    if style = outline // do stuff
    else               // do other stuff
    ctx.restore();
};

ti.prototype.equals = function(other, aUnionFind) {
    return (other instanceof ti &&
    this.pinholeX == other.pinholeX &&
    this.pinholeY == other.pinholeY &&
    this.side == other.side &&
    this.angle == other.angle &&
    this.style == other.style &&
    plt.baselib.equality.equals(this.color, other.color, aUnionFind));
};