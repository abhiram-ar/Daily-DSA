class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        n1 = len(word1)
        n2 = len(word2)

        i = j = k =  0
        if (n1 != n2):
            res = ['']*(2*min(n1,n2)+1)
        else:
            res = ['']*(2*min(n1,n2))
        while i < n1 and j < n2:
            res[k] = word1[i]
            k += 1
            i += 1
            res[k] = word2[j]
            k += 1
            j += 1

        if(n1 > n2):
            res[k] = word1[i:]
        elif(n2 > n1):
            res[k] = word2[j:]
        print(res)

        return "".join(res)

        