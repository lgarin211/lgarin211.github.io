#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main()
{
	int a,b;
    float c,d;

    scanf("%d %d",&a,&b);
    scanf("%f",&c);
    scanf("%f",&d);
    printf("%d %d %.2f %.2f\n",a+b,a-b,c+d,c-d);
    return 0;
}