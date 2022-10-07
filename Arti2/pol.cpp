#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {
	
    int n;
    scanf("%d", &d);
    int hasil=0;
    while(n > 0)
    {
        int mod = n % 10;
        hasil+=mod;
        n = n / 10;
    }
    printf("%d\n",hasil); 
    return 0;
}
