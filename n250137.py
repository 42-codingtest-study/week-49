def solution(bandage, health, attacks):
    now = 0
    attack = attacks.pop(0)
    original_health = health
    while True:
        now = attack[0]
        health -= attack[1]
        if health <= 0:
            return -1
        if attacks:
            attack = attacks.pop(0)
            count = heal(bandage, now + 1, attack[0])
            health += count
            if health > original_health:
                health = original_health
            #print(now, attack[0], count, health)
        else:
            break
    if health <= 0:
        return -1
    else:
        return health
        
def heal(bandage, start, end):
    count = 0
    for i in range(start, end):
        count += 1
    if count >= bandage[0]:
        return count * bandage[1] + bandage[2]
    return count * bandage[1]