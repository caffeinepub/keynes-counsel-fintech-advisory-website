import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { FaqEntry, TeamMember, PricingDetail } from '../backend';

export function useFaqEntries() {
  const { actor, isFetching } = useActor();

  return useQuery<FaqEntry[]>({
    queryKey: ['faqEntries'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllActiveFaqEntries();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useTeamMembers() {
  const { actor, isFetching } = useActor();

  return useQuery<TeamMember[]>({
    queryKey: ['teamMembers'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getTeamMembers();
    },
    enabled: !!actor && !isFetching,
  });
}

export function usePricingDetails() {
  const { actor, isFetching } = useActor();

  return useQuery<PricingDetail | null>({
    queryKey: ['pricingDetails'],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getPricingDetails();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useRegisterUser() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      email,
      phone,
      hasConsented = true,
    }: {
      name: string;
      email: string;
      phone: string;
      hasConsented?: boolean;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.registerUser(name, email, phone, hasConsented);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userRegistrations'] });
    },
  });
}

export function useSubmitContactMessage() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      email,
      message,
    }: {
      name: string;
      email: string;
      message: string;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitContactMessage(name, email, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactMessages'] });
    },
  });
}
