# BezierCurvesUsingHTMLCanvas
 Manual implementation of Cubic Bezier Curves using HTML Canvas

### General Information
* The objective of this repository is to try to recreate the Photoshop Pen Tool using HTML Canvas for research and practice purposes only. (_Not finished yet_)
* It will be updated as I develop new stuff.

### What do i have at this point (besides bugs)
- A <s>beautiful</s> canvas
- You can click at any spot to create an Anchor Point and two angle points linked to that anchor point, if you simply hold the mouse button when creating a new Anchor Point, you will drag one angle point to where the mouse is and the other to the opposite side
- After a anchor point is created, you can drag any anchor point and angle point to any other spot inside the canvas by holding `Ctrl` and dragging a point
- Each 2 anchor points, a curve is created using 1º anchor point, its right angle point, the 2ª anchor point's left angle point and, finnaly, the 2º anchor point   
- A `Ctrl+Z` command to erase the last point created (note that it doesn't undo the last change on the canvas, this yet has to be done)
  
  
To understand the bezier curves a bit better:  
- The black points are the initial and ending points of the 4 point curve
- The red points are the angle points, where the curve is interpolated (the curve does not intersect with these red points)  

_It's like the black points are those "anchor points" of the Photoshop pen tool and the red points are those angle points where you can change the curvature of the line/curve you created with the anchor points._


#### TO DO
1. **[FIXED]** <s>There's a problem when clicking and dragging an anchor point: the angleLeft and angleRight switch places (????)</s>
2. Need to find a way to: when the `points.length` is bigger than 1, if the user click on the inital anchor point, close the curve  
**[Sugestion to solve it:]**
   - Create a new bool `closedCurve` that, when it is true, the `drawBezier` function will use the initial point as the last point, closing the curve (the 3º point will be `points[0].angleLeft` and the 4º point will be `points[0].anchorPoint`)
   - When pressing `Ctrl+Z`, if the bool `closedCurve` is `true`, then instead of popping the last Point, just change `closedCurve` to `false` and return

