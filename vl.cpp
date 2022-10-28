#include <stdio.h>
#include <string.h>

struct Score
{
    char name[100] = {};
    int score;
};
Score score[100];

FILE *f;
int currentin;

// void merge();
// void intian();
// void showdata();
// void margeSort();

void intian()
{
    f = fopen("score.txt", "r");
    currentin = 0;

    while (!feof(f))
    {
        fscanf(f, "%[^#]#%d\n", score[currentin].name, &score[currentin].score);
        currentin++;
    }
    fclose(f);
}

void merge(int left, int mid, int right)
{
    int n1 = mid - left + 1;
    int n2 = right - mid;
    Score L[n1], R[n2];

    for (int i = 0; i < n1; i++)
    {
        L[i] = score[left + i];
    }

    for (int i = 0; i < n2; i++)
    {
        R[i] = score[mid + 1 + i];
    }

    int i = 0, j = 0, k = left;

    while (i < n1 && j < n2)
    {
        if (strcmp(L[i].name, R[j].name) <= 0)
        {
            score[k++] = L[i++];
        }
        else
        {
            score[k++] = R[j++];
        }
    }

    while (i < n1)
    {
        score[k++] = L[i++];
    }

    while (j < n2)
    {
        score[k++] = R[j++];
    }

    // for (int i = 0; i < count; i++)
    // {
    //     /* code */
    // }

    // for (int  i = 0; i < n1; i++)
    // {
    //     L[i]=score[left+i];
    // }

    // for (int  i = 0; i < n2; i++)
    // {
    //     R[i]=score[mid+1+i];
    // }
}

void margeSort(int left, int right)
{
    if (left < right)
    {
        int mid = left  +(right - left) / 2;
        margeSort(left, mid);
        margeSort(mid + 1, right);
        merge(left, mid, right);
    }
}

void showdata()
{
    margeSort(0, currentin - 1);
    for (int i = 0; i < currentin; i++)
    {
        printf("Name : %s\n", score[i].name);
        printf("score : %d\n\n", score[i].score);
    }
}

int binaryS(int left,int right,char * name){
    if (left <= right)
    {
        int mid=left + (right-left)/2;
        if (strcmp(name,score[mid].name)==0)
        {
            return mid;
        }

        if (strcmp(name,score[mid].name)){
            return binaryS(left,mid-1,name);
        }
        return binaryS(mid+1,right,name);
    }else{
        return -1;
    }
    
}

bool validName(char *name){
    int index=binaryS(0,currentin,name);
    return index==-1;
}

void insert(){
    char name[100]={};
    int s;
    do{
        printf("input :");
        scanf("%[^\n]",name);
        getchar();
    }while (!validName(name));
    
}

int main()
{
    intian();
    int p=0;
    // do{
        showdata();
        insert();
    //     scanf("%d", &p);

    // }
    return 0;
}
