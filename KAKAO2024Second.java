package lv2;

import java.util.*;

public class KAKAO2024Second {

	private static Map<Integer, int[]> makeInfo(int[][] edges) {
		Map<Integer, int[]> info = new HashMap<>();
		for (int[] edge : edges) {
			int outNode = edge[0];
			int inNode = edge[1];

			info.putIfAbsent(outNode, new int[]{0, 0});
			info.putIfAbsent(inNode, new int[]{0, 0});

			info.get(outNode)[0]++;
			info.get(inNode)[1]++;
		}
		return info;
	}

	private static int[] countGraph(Map<Integer, int[]> info) {
		int[] result = new int[4];
		for (Map.Entry<Integer, int[]> entry : info.entrySet()) {
			int[] io = entry.getValue();
			int out = io[0];
			int in = io[1];

			if (out >= 2 && in == 0) result[0] = entry.getKey();
			else if (out >= 2 && in >= 2) result[3]++;
			else if (out == 0) result[2]++;
		}
		result[1] = info.get(result[0])[0] - result[2] - result[3];
		return result;
	}

	public static int[] solution(int[][] edges) {

		Map<Integer, int[]> info = makeInfo(edges);
		return countGraph(info);
	}

	public static void main(String[] args) {
		int[][] edges = {
				{4, 11}, {1, 12}, {8, 3}, {12, 7}, {4, 2}, {7, 11}, {4, 8}, {9, 6},
				{10, 11}, {6, 10}, {3, 5}, {11, 1}, {5, 3}, {11, 9}, {3, 8}
		};

		int[] answer = solution(edges);
		for (int num : answer) {
			System.out.print(num + " ");
		}
	}

}