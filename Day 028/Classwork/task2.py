'''altERnaTIng cAsE <=> ALTerNAtiNG CaSe'''

def to_alternating_case(string):
    new_string=""
    for i in string:
        if i==i.upper():
            new_string=new_string+i.lower()
        elif i==i.lower():
            new_string=new_string+i.upper()
    return new_string