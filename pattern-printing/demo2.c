 #include <stdio.h>

int main(){
int n=7;
for(int i=1; i<=n; i++){
	for(int j=1; j<=i ; j++){
		if(i%2==1) printf("%c", 65 + (i/2));
		else printf("%d", i/2);
	}
	printf("\n");
	
}

return 0;
}
