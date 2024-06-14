#include <stdio.h>
#include <conio.h>
void main()
{
    int n, a[10], i, j, temp, min;
    //clrscr();
    clrscr();
    printf("Enter the size of the array:");
    scanf("%d", &n);
    printf("Enter the array elements\n");
    for (i = 0; i < n; i++)
        scanf("%d", &a[i]);
    for (i = 0; i < n; i++)
    {
        min = i;
        for (j = i + 1; j < n; j++)
        {
            if (a[j] < a[min])
                min = j;
        }
        temp = a[i];
        a[i] = a[min];
        a[min] = temp;
    }
    printf("Sorted Elements:\n");
    for (i = 0; i < n; i++)
        printf("%d  ", a[i]);
    getch();
}